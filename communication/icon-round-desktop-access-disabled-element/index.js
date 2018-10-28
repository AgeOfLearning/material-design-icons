import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDesktopAccessDisabledElement
 * @class IconRoundDesktopAccessDisabledElement
 * @extends {AoflElement}
 */
class IconRoundDesktopAccessDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDesktopAccessDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-desktop-access-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDesktopAccessDisabledElement.is, IconRoundDesktopAccessDisabledElement);

export default IconRoundDesktopAccessDisabledElement;
