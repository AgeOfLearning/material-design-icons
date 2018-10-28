import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDeveloperModeElement
 * @class IconSharpDeveloperModeElement
 * @extends {AoflElement}
 */
class IconSharpDeveloperModeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDeveloperModeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-developer-mode';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDeveloperModeElement.is, IconSharpDeveloperModeElement);

export default IconSharpDeveloperModeElement;
