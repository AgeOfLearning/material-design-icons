import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNavigationElement
 * @class IconBaselineNavigationElement
 * @extends {AoflElement}
 */
class IconBaselineNavigationElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNavigationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-navigation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNavigationElement.is, IconBaselineNavigationElement);

export default IconBaselineNavigationElement;
