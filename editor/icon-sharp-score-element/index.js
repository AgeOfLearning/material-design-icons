import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpScoreElement
 * @class IconSharpScoreElement
 * @extends {AoflElement}
 */
class IconSharpScoreElement extends AoflElement {
  /**
   * Creates an instance of IconSharpScoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-score';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpScoreElement.is, IconSharpScoreElement);

export default IconSharpScoreElement;
