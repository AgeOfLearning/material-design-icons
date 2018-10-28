import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVolumeMuteElement
 * @class IconOutlineVolumeMuteElement
 * @extends {AoflElement}
 */
class IconOutlineVolumeMuteElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVolumeMuteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-volume-mute';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVolumeMuteElement.is, IconOutlineVolumeMuteElement);

export default IconOutlineVolumeMuteElement;
