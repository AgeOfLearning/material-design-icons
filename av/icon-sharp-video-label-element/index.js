import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVideoLabelElement
 * @class IconSharpVideoLabelElement
 * @extends {AoflElement}
 */
class IconSharpVideoLabelElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVideoLabelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-video-label';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVideoLabelElement.is, IconSharpVideoLabelElement);

export default IconSharpVideoLabelElement;
