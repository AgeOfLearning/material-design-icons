import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePregnantWomanElement
 * @class IconBaselinePregnantWomanElement
 * @extends {AoflElement}
 */
class IconBaselinePregnantWomanElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePregnantWomanElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-pregnant-woman';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePregnantWomanElement.is, IconBaselinePregnantWomanElement);

export default IconBaselinePregnantWomanElement;
