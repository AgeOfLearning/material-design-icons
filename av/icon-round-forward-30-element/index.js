import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundForward30Element
 * @class IconRoundForward30Element
 * @extends {AoflElement}
 */
class IconRoundForward30Element extends AoflElement {
  /**
   * Creates an instance of IconRoundForward30Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-forward-30';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundForward30Element.is, IconRoundForward30Element);

export default IconRoundForward30Element;
