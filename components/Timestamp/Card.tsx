import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

interface TimestampCardProps {}

export const TimestampCard: React.FC<TimestampCardProps> = () => {
  return (
    <Link href="/timestamp">
      <Card href="/timestamp">Memento Mortem</Card>
    </Link>
  );
};

const Card = styled.a`
  /* background: url(https://i.pinimg.com/564x/1a/f1/19/1af119173d6d11b0c7ae14b11d5c61b6.jpg), */
  /* background: url(https://is3-ssl.mzstatic.com/image/thumb/Features118/v4/37/10/47/371047eb-1476-476a-4c2d-8ee49a986f7e/source/480x633fn.jpg), */
  background: url(https://images.unsplash.com/photo-1533749047139-189de3cf06d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80),
    var(--color-gray-8);
  background-size: cover;
  border-radius: 0.5rem;
  display: block;
  padding: 1em;
  color: gold;
  text-decoration: none;

  min-height: 320px;
  min-width: 240px;
`;

// width: 87.5%;
