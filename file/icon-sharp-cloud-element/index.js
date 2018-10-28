import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCloudElement
 * @class IconSharpCloudElement
 * @extends {AoflElement}
 */
class IconSharpCloudElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCloudElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-cloud';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCloudElement.is, IconSharpCloudElement);

export default IconSharpCloudElement;
