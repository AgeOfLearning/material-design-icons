import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineClassElement
 * @class IconBaselineClassElement
 * @extends {AoflElement}
 */
class IconBaselineClassElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineClassElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-class';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineClassElement.is, IconBaselineClassElement);

export default IconBaselineClassElement;
