import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWhereToVoteElement
 * @class IconTwotoneWhereToVoteElement
 * @extends {AoflElement}
 */
class IconTwotoneWhereToVoteElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWhereToVoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-where-to-vote';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWhereToVoteElement.is, IconTwotoneWhereToVoteElement);

export default IconTwotoneWhereToVoteElement;
