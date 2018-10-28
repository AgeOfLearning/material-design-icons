import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHighlightOffElement
 * @class IconRoundHighlightOffElement
 * @extends {AoflElement}
 */
class IconRoundHighlightOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHighlightOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-highlight-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHighlightOffElement.is, IconRoundHighlightOffElement);

export default IconRoundHighlightOffElement;
