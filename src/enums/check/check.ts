export enum Check {
	CHECK_NONE = 0,
	CHECK_TRUSTED_ROOT = 1,
	CHECK_TIME_VALIDITY = 2,
	CHECK_SIGNATURE_VALIDITY = 4,
	CHECK_ONLINE_REVOCATION_STATUS = 8,
	CHECK_OFFLINE_REVOCATION_STATUS = 16,
	TRUST_IS_NOT_TIME_VALID = 1,
	TRUST_IS_NOT_TIME_NESTED = 2,
	TRUST_IS_REVOKED = 4,
	TRUST_IS_NOT_SIGNATURE_VALID = 8,
	TRUST_IS_NOT_VALID_FOR_USAGE = 16,
	TRUST_IS_UNTRUSTED_ROOT = 32,
	TRUST_REVOCATION_STATUS_UNKNOWN = 64,
	TRUST_IS_CYCLIC = 128,
	TRUST_IS_PARTIAL_CHAIN = 65536,
	TRUST_CTL_IS_NOT_TIME_VALID = 131072,
	TRUST_CTL_IS_NOT_SIGNATURE_VALID = 262144,
	TRUST_CTL_IS_NOT_VALID_FOR_USAGE = 524288
}
