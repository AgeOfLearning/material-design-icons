import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVolumeMuteElement
 * @class IconTwotoneVolumeMuteElement
 * @extends {AoflElement}
 */
class IconTwotoneVolumeMuteElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVolumeMuteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-volume-mute';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVolumeMuteElement.is, IconTwotoneVolumeMuteElement);

export default IconTwotoneVolumeMuteElement;
