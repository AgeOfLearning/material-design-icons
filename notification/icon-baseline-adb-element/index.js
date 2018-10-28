import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAdbElement
 * @class IconBaselineAdbElement
 * @extends {AoflElement}
 */
class IconBaselineAdbElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAdbElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-adb';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAdbElement.is, IconBaselineAdbElement);

export default IconBaselineAdbElement;
