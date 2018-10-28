import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLinkElement
 * @class IconOutlineLinkElement
 * @extends {AoflElement}
 */
class IconOutlineLinkElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLinkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-link';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLinkElement.is, IconOutlineLinkElement);

export default IconOutlineLinkElement;
