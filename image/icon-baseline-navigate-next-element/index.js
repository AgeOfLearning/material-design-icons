import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNavigateNextElement
 * @class IconBaselineNavigateNextElement
 * @extends {AoflElement}
 */
class IconBaselineNavigateNextElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNavigateNextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-navigate-next';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNavigateNextElement.is, IconBaselineNavigateNextElement);

export default IconBaselineNavigateNextElement;
