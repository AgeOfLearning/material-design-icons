import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAccessTimeElement
 * @class IconOutlineAccessTimeElement
 * @extends {AoflElement}
 */
class IconOutlineAccessTimeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAccessTimeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-access-time';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAccessTimeElement.is, IconOutlineAccessTimeElement);

export default IconOutlineAccessTimeElement;
