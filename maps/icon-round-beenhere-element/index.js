import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBeenhereElement
 * @class IconRoundBeenhereElement
 * @extends {AoflElement}
 */
class IconRoundBeenhereElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBeenhereElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-beenhere';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBeenhereElement.is, IconRoundBeenhereElement);

export default IconRoundBeenhereElement;
