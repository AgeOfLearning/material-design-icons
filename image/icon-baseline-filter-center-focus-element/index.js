import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFilterCenterFocusElement
 * @class IconBaselineFilterCenterFocusElement
 * @extends {AoflElement}
 */
class IconBaselineFilterCenterFocusElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFilterCenterFocusElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-filter-center-focus';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFilterCenterFocusElement.is, IconBaselineFilterCenterFocusElement);

export default IconBaselineFilterCenterFocusElement;
