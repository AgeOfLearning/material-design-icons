import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMoreElement
 * @class IconTwotoneMoreElement
 * @extends {AoflElement}
 */
class IconTwotoneMoreElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-more';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMoreElement.is, IconTwotoneMoreElement);

export default IconTwotoneMoreElement;
