import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundGrainElement
 * @class IconRoundGrainElement
 * @extends {AoflElement}
 */
class IconRoundGrainElement extends AoflElement {
  /**
   * Creates an instance of IconRoundGrainElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-grain';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundGrainElement.is, IconRoundGrainElement);

export default IconRoundGrainElement;
