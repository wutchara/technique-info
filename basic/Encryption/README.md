# Encoding (1 way encoding)
> Encoding is the process of putting a sequence of characters into a specialized format for efficient transmission or storage

<br />

![hash-2](./images/hash-2.png)

<br />


- **Hashing function** => A hash function is a mathematical function that converts a numerical input value into another compressed numerical value.
- **MAC function** (Message Authenticaion Code) => cross check original message and result message
  - Hash + check sum = HMAC (Hash-based MAC)
- **KDF function** (Key Derivation Functions) is a cryptographic algorithm that derives one or more secret keys from a secret value such as a master key, a password, or a passphrase using a pseudorandom function
  - HMAC + salt(random) = HKDF (HMAC-based KDF)

<br />
(Algorithm )

![hash-1](./images/hash-1.webp)



---


# Encryption (2 ways encoding)

> Encryption is a way for data—messages or files—to be made unreadable

- Algorithm
- Decryption
- Key

---

## Symmetric Key

- Triple DES(Data Encryption Standard)
- AES (Advanced Encryption Standard)

![sym-1](./images/encription.png)


## Asymmetric Key

- RSA

![asym-1](./images/asymmetric.avif)

REF:
- https://bigdata.go.th/big-data-101/encoding-and-encryption-for-developers/

---
---

# The Future of Encryption
- [quantum cryptography](https://www.nist.gov/blogs/taking-measure/post-quantum-cryptography-qa-nists-matt-scholl)

