import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRepeatOneElement
 * @class IconBaselineRepeatOneElement
 * @extends {AoflElement}
 */
class IconBaselineRepeatOneElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRepeatOneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-repeat-one';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRepeatOneElement.is, IconBaselineRepeatOneElement);

export default IconBaselineRepeatOneElement;
