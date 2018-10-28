import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePolymerElement
 * @class IconOutlinePolymerElement
 * @extends {AoflElement}
 */
class IconOutlinePolymerElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePolymerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-polymer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePolymerElement.is, IconOutlinePolymerElement);

export default IconOutlinePolymerElement;
