import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineChevronLeftElement
 * @class IconBaselineChevronLeftElement
 * @extends {AoflElement}
 */
class IconBaselineChevronLeftElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineChevronLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-chevron-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineChevronLeftElement.is, IconBaselineChevronLeftElement);

export default IconBaselineChevronLeftElement;
