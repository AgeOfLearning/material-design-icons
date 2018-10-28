import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineChevronRightElement
 * @class IconBaselineChevronRightElement
 * @extends {AoflElement}
 */
class IconBaselineChevronRightElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineChevronRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-chevron-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineChevronRightElement.is, IconBaselineChevronRightElement);

export default IconBaselineChevronRightElement;
