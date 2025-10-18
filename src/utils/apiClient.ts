/**
 * API通信用のユーティリティ関数群
 */

/**
 * API ベースURLを取得
 */
export const getApiBaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1234';
};

/**
 * APIエラークラス
 */
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public endpoint: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * 共通のAPI呼び出し関数
 * @param endpoint - APIエンドポイント（例：'/quiz/skill'）
 * @returns Promise<T> - レスポンスデータ
 */
export const apiClient = async <T>(endpoint: string): Promise<T> => {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}${endpoint}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new ApiError(
        `API request failed: ${response.status} ${response.statusText}`,
        response.status,
        endpoint
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    // Network error や JSON parse error など
    throw new ApiError(
      `Network or parsing error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      0,
      endpoint
    );
  }
};

/**
 * API エンドポイントの定数
 */
export const API_ENDPOINTS = {
  QUIZ_SKILL: '/quiz/skill',
  SERVANTS_OPTIONS: '/servants/options',
} as const;
