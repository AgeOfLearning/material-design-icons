import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCloudDoneElement
 * @class IconSharpCloudDoneElement
 * @extends {AoflElement}
 */
class IconSharpCloudDoneElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCloudDoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-cloud-done';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCloudDoneElement.is, IconSharpCloudDoneElement);

export default IconSharpCloudDoneElement;
