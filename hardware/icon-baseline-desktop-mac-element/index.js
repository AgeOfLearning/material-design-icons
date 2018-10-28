import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDesktopMacElement
 * @class IconBaselineDesktopMacElement
 * @extends {AoflElement}
 */
class IconBaselineDesktopMacElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDesktopMacElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-desktop-mac';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDesktopMacElement.is, IconBaselineDesktopMacElement);

export default IconBaselineDesktopMacElement;
