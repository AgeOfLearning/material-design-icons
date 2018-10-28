import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRepeatElement
 * @class IconBaselineRepeatElement
 * @extends {AoflElement}
 */
class IconBaselineRepeatElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRepeatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-repeat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRepeatElement.is, IconBaselineRepeatElement);

export default IconBaselineRepeatElement;
