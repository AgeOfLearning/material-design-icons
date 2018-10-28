import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineThumbUpElement
 * @class IconBaselineThumbUpElement
 * @extends {AoflElement}
 */
class IconBaselineThumbUpElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineThumbUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-thumb-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineThumbUpElement.is, IconBaselineThumbUpElement);

export default IconBaselineThumbUpElement;
