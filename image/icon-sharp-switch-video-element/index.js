import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSwitchVideoElement
 * @class IconSharpSwitchVideoElement
 * @extends {AoflElement}
 */
class IconSharpSwitchVideoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSwitchVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-switch-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSwitchVideoElement.is, IconSharpSwitchVideoElement);

export default IconSharpSwitchVideoElement;
