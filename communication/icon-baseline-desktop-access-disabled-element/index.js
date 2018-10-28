import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDesktopAccessDisabledElement
 * @class IconBaselineDesktopAccessDisabledElement
 * @extends {AoflElement}
 */
class IconBaselineDesktopAccessDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDesktopAccessDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-desktop-access-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDesktopAccessDisabledElement.is, IconBaselineDesktopAccessDisabledElement);

export default IconBaselineDesktopAccessDisabledElement;
