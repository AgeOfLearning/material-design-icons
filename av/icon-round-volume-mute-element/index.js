import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVolumeMuteElement
 * @class IconRoundVolumeMuteElement
 * @extends {AoflElement}
 */
class IconRoundVolumeMuteElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVolumeMuteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-volume-mute';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVolumeMuteElement.is, IconRoundVolumeMuteElement);

export default IconRoundVolumeMuteElement;
