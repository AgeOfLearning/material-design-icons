import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineThumbsUpDownElement
 * @class IconOutlineThumbsUpDownElement
 * @extends {AoflElement}
 */
class IconOutlineThumbsUpDownElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineThumbsUpDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-thumbs-up-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineThumbsUpDownElement.is, IconOutlineThumbsUpDownElement);

export default IconOutlineThumbsUpDownElement;
