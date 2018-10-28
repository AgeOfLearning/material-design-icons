import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineInsertEmoticonElement
 * @class IconBaselineInsertEmoticonElement
 * @extends {AoflElement}
 */
class IconBaselineInsertEmoticonElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineInsertEmoticonElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-insert-emoticon';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineInsertEmoticonElement.is, IconBaselineInsertEmoticonElement);

export default IconBaselineInsertEmoticonElement;
