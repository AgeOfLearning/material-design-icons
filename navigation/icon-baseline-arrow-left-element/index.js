import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineArrowLeftElement
 * @class IconBaselineArrowLeftElement
 * @extends {AoflElement}
 */
class IconBaselineArrowLeftElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineArrowLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-arrow-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineArrowLeftElement.is, IconBaselineArrowLeftElement);

export default IconBaselineArrowLeftElement;
