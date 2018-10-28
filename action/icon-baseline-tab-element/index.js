import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTabElement
 * @class IconBaselineTabElement
 * @extends {AoflElement}
 */
class IconBaselineTabElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTabElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-tab';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTabElement.is, IconBaselineTabElement);

export default IconBaselineTabElement;
