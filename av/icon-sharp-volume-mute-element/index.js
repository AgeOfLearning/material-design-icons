import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVolumeMuteElement
 * @class IconSharpVolumeMuteElement
 * @extends {AoflElement}
 */
class IconSharpVolumeMuteElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVolumeMuteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-volume-mute';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVolumeMuteElement.is, IconSharpVolumeMuteElement);

export default IconSharpVolumeMuteElement;
