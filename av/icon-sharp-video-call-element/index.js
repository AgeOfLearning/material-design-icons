import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVideoCallElement
 * @class IconSharpVideoCallElement
 * @extends {AoflElement}
 */
class IconSharpVideoCallElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVideoCallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-video-call';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVideoCallElement.is, IconSharpVideoCallElement);

export default IconSharpVideoCallElement;
