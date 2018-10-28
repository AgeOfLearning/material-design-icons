import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDeveloperModeElement
 * @class IconOutlineDeveloperModeElement
 * @extends {AoflElement}
 */
class IconOutlineDeveloperModeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDeveloperModeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-developer-mode';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDeveloperModeElement.is, IconOutlineDeveloperModeElement);

export default IconOutlineDeveloperModeElement;
