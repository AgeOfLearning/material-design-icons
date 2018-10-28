import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCloudCircleElement
 * @class IconSharpCloudCircleElement
 * @extends {AoflElement}
 */
class IconSharpCloudCircleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCloudCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-cloud-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCloudCircleElement.is, IconSharpCloudCircleElement);

export default IconSharpCloudCircleElement;
