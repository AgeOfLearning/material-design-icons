import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWrapTextElement
 * @class IconTwotoneWrapTextElement
 * @extends {AoflElement}
 */
class IconTwotoneWrapTextElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWrapTextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-wrap-text';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWrapTextElement.is, IconTwotoneWrapTextElement);

export default IconTwotoneWrapTextElement;
