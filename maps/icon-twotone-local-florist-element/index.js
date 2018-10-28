import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalFloristElement
 * @class IconTwotoneLocalFloristElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalFloristElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalFloristElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-florist';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalFloristElement.is, IconTwotoneLocalFloristElement);

export default IconTwotoneLocalFloristElement;
