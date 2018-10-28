import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTextRotateUpElement
 * @class IconTwotoneTextRotateUpElement
 * @extends {AoflElement}
 */
class IconTwotoneTextRotateUpElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTextRotateUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-text-rotate-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTextRotateUpElement.is, IconTwotoneTextRotateUpElement);

export default IconTwotoneTextRotateUpElement;
