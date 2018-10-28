import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalActivityElement
 * @class IconRoundLocalActivityElement
 * @extends {AoflElement}
 */
class IconRoundLocalActivityElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalActivityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-activity';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalActivityElement.is, IconRoundLocalActivityElement);

export default IconRoundLocalActivityElement;
