import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDeleteForeverElement
 * @class IconBaselineDeleteForeverElement
 * @extends {AoflElement}
 */
class IconBaselineDeleteForeverElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDeleteForeverElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-delete-forever';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDeleteForeverElement.is, IconBaselineDeleteForeverElement);

export default IconBaselineDeleteForeverElement;
