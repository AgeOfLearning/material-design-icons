import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundGradeElement
 * @class IconRoundGradeElement
 * @extends {AoflElement}
 */
class IconRoundGradeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundGradeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-grade';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundGradeElement.is, IconRoundGradeElement);

export default IconRoundGradeElement;
