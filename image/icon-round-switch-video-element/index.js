import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSwitchVideoElement
 * @class IconRoundSwitchVideoElement
 * @extends {AoflElement}
 */
class IconRoundSwitchVideoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSwitchVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-switch-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSwitchVideoElement.is, IconRoundSwitchVideoElement);

export default IconRoundSwitchVideoElement;
