import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePortraitElement
 * @class IconOutlinePortraitElement
 * @extends {AoflElement}
 */
class IconOutlinePortraitElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePortraitElement.is, IconOutlinePortraitElement);

export default IconOutlinePortraitElement;
