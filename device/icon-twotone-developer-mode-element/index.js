import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDeveloperModeElement
 * @class IconTwotoneDeveloperModeElement
 * @extends {AoflElement}
 */
class IconTwotoneDeveloperModeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDeveloperModeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-developer-mode';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDeveloperModeElement.is, IconTwotoneDeveloperModeElement);

export default IconTwotoneDeveloperModeElement;
